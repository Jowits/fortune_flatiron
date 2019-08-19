class Api::V1::FortunesController < ApplicationController
    
    def index
        fortunes = Fortune.all
        render json: fortunes
    end

end
