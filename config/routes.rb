Rails.application.routes.draw do
  root "index#index"
  get 'gallery' => 'index#gallery'
  get 'shop' => 'index#shop'
end
