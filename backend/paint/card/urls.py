from django.urls import path
from . import rest

urlpatterns = [
    path("cards/", rest.CardsApiView.as_view()),
    path("cards/<str:card_id>", rest.CardDetailsApiView.as_view()),
    path("categories/", rest.CategoryApiView.as_view()),
    path("categories/<str:category_id>", rest.CategoryDetailsApiView.as_view()),
    path("designers/", rest.DesignerApiView.as_view()),
    path("designers/<str:designer_id>", rest.DesignerDetailsApiView.as_view()),
]
