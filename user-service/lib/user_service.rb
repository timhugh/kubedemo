# frozen_string_literal: true

require 'hanami/router'
require 'user_index'

class UserService
  def initialize
    @router = build_routes
  end

  def call(env)
    @router.call(env)
  end

  private

  def build_routes
    router = Hanami::Router.new
    router.get '/users/', to: UserIndex.new
    router
  end
end
