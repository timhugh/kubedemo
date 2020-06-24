require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'rack'
end

PORT = ENV['PORT'].freeze

App = lambda do |env|
  [200, {}, [env.to_s]]
end

Rack::Server.start app: App, port: PORT
