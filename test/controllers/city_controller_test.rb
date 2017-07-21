require 'test_helper'

class CityControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get city_create_url
    assert_response :success
  end

  test "should get show" do
    get city_show_url
    assert_response :success
  end

  test "should get index" do
    get city_index_url
    assert_response :success
  end

end
