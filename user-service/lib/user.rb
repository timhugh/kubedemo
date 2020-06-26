# frozen_string_literal: true

class User < Struct.new(:name, :role)
  def serialize
    {
      name: name,
      role: role
    }
  end
end
