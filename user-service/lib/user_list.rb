# frozen_string_literal: true

class UserList
  def initialize(*users)
    @users = users
  end

  def serialize
    @users.map(&:serialize)
  end
end
