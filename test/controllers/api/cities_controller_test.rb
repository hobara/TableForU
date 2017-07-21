require 'test_helper'

class Api::CitiesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_cities_create_url
    assert_response :success
  end

  test "should get show" do
    get api_cities_show_url
    assert_response :success
  end

  test "should get index" do
    get api_cities_index_url
    assert_response :success
  end

end
