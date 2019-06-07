require 'selenium-webdriver'
require 'yaml'
require_relative './spec_helper.rb'
require_relative './montage_spec_helpers.rb'
require_relative './api_spec_helpers.rb'

describe 'montage' do
  include MontageSpecHelpers
  include ApiSpecHelpers
  
  before :each do |example|
    caps_opts = { 'chromeOptions' => { 'args' => ['--incognito'] } }
    caps = Selenium::WebDriver::Remote::Capabilities.chrome(caps_opts)
    @driver = Selenium::WebDriver.for :chrome, url: config['chromedriver_url'], desired_capabilities: caps
  end

  after :each do |example|
    if example.exception
      link = save_screenshot("Test failed: #{example.description}")
      puts "Test \"#{example.description}\" failed! Screenshot is #{link} and browser console output is #{console_logs}."
    end
    @driver.quit
  end

  context 'web' do
    it 'should login' do
      login_montage
    end

    it 'should create project' do
      login_montage
      click_on_element '.md-fab'
      title = "Project #{Time.now.to_i}"
      fill_field '#projectName', title
      fill_field '#projectDescription', title
      click_on_element '.md-accent'
      sleep 5
      expect(get_element('.project__name').text == title).to be(true)
    end

    it 'should search and add video' do
      login_montage
      api_create_project
      @driver.navigate.to(config['self_url'] + '/my-projects')
      click_on_element '.project__link'
      sleep 10
      @driver.execute_script "document.querySelector('.gd-onboarding-popover').style.display = 'none';"
      @driver.execute_script "document.querySelector('.gd-onboarding-popover').click();"
      wait_for_text 'Search for videos to get started'
      expect(element_exists?('.project__summary-count')).to be(false)
      click_on_element '.md-fab'
      fill_field '.one-search__input', 'Iron Maiden'
      sleep 20
      click_on_element '.video-list-item__cell button'
      click_on_element '.video-list__thead--add-all button'
      sleep 30
      click_on_element '.one-search__close-button button'
      sleep 10
      expect(element_exists?('.project__summary-count')).to be(true)
    end

    it 'should add comment to video' do
      login_montage
      data = api_create_video
      @driver.navigate.to(config['self_url'] + "/project/#{data[:team_id]}")
      sleep 10
      @driver.execute_script "document.querySelector('.gd-onboarding-popover').style.display = 'none';"
      @driver.execute_script "document.querySelector('.gd-onboarding-popover').click();"
      click_on_element '.video-list-item__video-link'
      comments = get_elements '.gd-video-timeline__comments-list li', :css, 5, 3
      expect(comments.size == 0).to be(true)
      click_on_element '.gd-video-timeline__comment-label'
      fill_field '.gd-timed-comment__input', "Comment #{Time.now.to_i}"
      click_on_element '.gd-timed-comment-popup__actions button + button'
      comments = get_elements '.gd-video-timeline__comments-list li', :css, 5, 3
      expect(comments.size == 1).to be(true)
      @driver.navigate.refresh
      comments = get_elements '.gd-video-timeline__comments-list li', :css, 5, 3
      expect(comments.size == 1).to be(true)
    end
  end
end
