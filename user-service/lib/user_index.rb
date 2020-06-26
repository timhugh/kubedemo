# frozen_string_literal: true

require 'json'

require 'user'
require 'user_list'

class UserIndex
  def call(_env)
    users = all_users
    [200, {}, [
      JSON.generate(users.serialize)
    ]]
  end

  private

  def all_users
    UserList.new(
      User.new('Tim', 'admin'),
      User.new('Bob', 'customer')
    )
  end
end
