from django.urls import path
from . import rest

urlpatterns = [
    path("cards/", rest.CardsApiView.as_view()),
    path("cards/<str:card_name>", rest.CardDetailsApiView.as_view()),
    path("categories/", rest.CategoryApiView.as_view()),
    path("categories/<str:category_name>", rest.CategoryDetailsApiView.as_view()),
    path("designers/", rest.DesignerApiView.as_view()),
    path("designer/<str:designer_name>", rest.DesignerDetailsApiView.as_view()),
]
