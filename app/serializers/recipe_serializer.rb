class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name,
  :description,
  :prep_time,
  :cook_time,
  :yields,
  :yields_size,
  :image 
 
  belongs_to :user
end
