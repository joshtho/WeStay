class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :created_at
  has_many :lodgings
end
