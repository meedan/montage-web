require 'yaml'
module MontageSpecHelpers
  def config
    YAML.load_file('config.yml')
  end

  def login_google
    @driver.navigate.to 'https://accounts.google.com/signin/v2/identifier'
    fill_field '#identifierId', config['google_user']
    click_on_element '#identifierNext'
    sleep 5
    fill_field 'input[name=password]', config['google_password']
    click_on_element '#passwordNext'
    sleep 10
    wait_for_text('Welcome, ' + config['google_name'])
  end

  def login_montage
    login_google unless File.exist?('./cookies.csv')
    @driver.navigate.to config['self_url']
    sleep 10
    click_on_element '.btn-log-in'
    sleep 3
    window = @driver.window_handles.last
    @driver.switch_to.window(window)
    if File.exist?('./cookies.csv') 
      url = @driver.current_url.to_s
      File.readlines('./cookies.csv').each do |line|
        fields = line.chomp.split(',')
        @driver.manage.add_cookie name: fields[5], value: fields[6], path: fields[2], secure: (fields[1] == 'TRUE'), domain: fields[0]
      end
      @driver.navigate.to url
    end
    sleep 10
    click_on_element '#profileIdentifier'
    sleep 10
    window = @driver.window_handles.first
    @driver.switch_to.window(window)
    @driver.navigate.to config['self_url']
    sleep 10
    if element_exists? '.nda_button'
      click_on_element '.nda_button'
      click_on_element '.nda_button'
    end
    first_name, last_name = config['google_name'].split(' ')
    expect(get_element('.user-box__firstname').text == first_name).to be(true)
    expect(get_element('.user-box__lastname').text == last_name).to be(true)
    expect(@driver.current_url.to_s == config['self_url'] + '/my-projects').to be(true)
  end

  def get_element(selector, type = :css, visible = false)
    wait = Selenium::WebDriver::Wait.new(timeout: 60)
    wait.until {
      element = @driver.find_element(type, selector)
      !visible || element.displayed? ? element : nil
    }
  end

  def get_elements(selector, type = :css, wait = 10, max = 30)
    elements = []
    count = 0
    while count < max && elements.size == 0
      begin
        elements = @driver.find_elements(type, selector)
      rescue
      end
      count += 1
      sleep wait
    end
    elements
  end

  def element_exists?(selector, type = :css, wait = 30)
    sleep wait
    element = nil
    begin
      element = @driver.find_element(type, selector)
    rescue
      element = nil
    end
    !element.nil? && element.displayed?
  end

  def fill_field(selector, value, type = :css, visible = true)
    input = get_element(selector, type, visible)
    input.send_keys(value)
    sleep 1
  end

  def wait_for_text(text, interval = 10, max_times = 30)
    found = false
    times = 0
    while !found && times < max_times
      sleep interval
      if @driver.page_source.include?(text)
        found = true
      end
    end
    expect(found).to be(true)
  end

  def click_on_element(selector, type = :css)
    element = get_element(selector, type)
    begin
      element.click
    rescue Selenium::WebDriver::Error::ElementNotInteractableError => e
      if type == :css
        @driver.execute_script "document.querySelector('#{selector}').click()"
      else
        raise e
      end
    end
  end

  def save_screenshot(title)
    require 'imgur'
    path = '/tmp/' + (0...8).map{ (65 + rand(26)).chr }.join + '.png'
    @driver.save_screenshot(path)

    client = Imgur.new(config['imgur_client_id'])
    image = Imgur::LocalImage.new(path, title: title)
    uploaded = client.upload(image)
    uploaded.link
  end

  def console_logs
    require 'pp'
    @driver.manage.logs.get('browser').pretty_inspect
  end
end
