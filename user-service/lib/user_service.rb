# frozen_string_literal: true

require 'hanami/router'
require 'user_index'

class UserService
  def call(env)
    router.call(env)
  end

  private

  def router
    return @router if @router

    @router = Hanami::Router.new
    @router.get '/users/', to: user_index
    @router
  end

  def user_index
    @user_index ||= UserIndex.new
  end
end
