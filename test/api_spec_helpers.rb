require 'yaml'
module ApiSpecHelpers
  def config
    YAML.load_file('config.yml')
  end

  def api_path
    config['api_path'] + '/test/'
  end

  def request_api(path, params)
    require 'net/http'
    uri = URI(api_path + path)
    uri.query = URI.encode_www_form(params)
    response = Net::HTTP.get_response(uri)
    ret = nil
    begin
      ret = OpenStruct.new JSON.parse(response.body)['data']
    rescue
    end
    ret
  end

  def api_create_project
    team = request_api 'team', { name: "Test Team #{Time.now.to_i}", slug: "test-team-#{Time.now.to_i}", email: config['google_user'] }
    team_id = team.dbid
    project = request_api 'project', { title: "Test Project #{Time.now.to_i}", team_id: team_id }
    { project: project, team: team }
  end

  def api_create_video(youtube_id = 'Qq25KdBdRGE')
    data = api_create_project
    request_api 'link', { url: 'https://www.youtube.com/watch?v=' + youtube_id, email: config['google_user'], team_id: data[:team].dbid, project_id: data[:project].dbid }
    { youtube_id: youtube_id, team_id: data[:team].dbid }
  end
end
