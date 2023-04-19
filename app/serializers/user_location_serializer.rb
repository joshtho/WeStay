class UserLocationSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  # def lodgings
  #   Lodging.all.map { |lodge| self.object.id == lodge.user_id and lodge.location_id == self.object.id}
  #   # places.select { |lodge| lodge.user_id == self.object.id }
  # end
end
