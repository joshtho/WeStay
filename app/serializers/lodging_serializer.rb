class LodgingSerializer < ActiveModel::Serializer
  attributes :id, :link, :guests, :season, :dates, :image
  has_one :location
  has_one :user
end