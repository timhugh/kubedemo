# frozen_string_literal: true

require 'bundler'
Bundler.setup

require 'dotenv/load'

$LOAD_PATH.unshift('./lib')

require 'rack/cors'
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: :any
  end
end

require 'user_service'
run UserService.new
