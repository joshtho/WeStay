class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description
  has_many :lodgings
end
