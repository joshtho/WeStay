class LodgingSerializer < ActiveModel::Serializer
  attributes :id, :link, :guests, :season, :dates, :image, :location, :user
end

