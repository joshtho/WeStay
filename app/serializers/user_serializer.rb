class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :lodgings 
  has_many :locations, serializer: UserLocationSerializer
end
