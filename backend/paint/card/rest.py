from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from . import db
from . import serializers

from drf_yasg.utils import swagger_auto_schema


class CardsApiView(APIView):
    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = serializers.CardSerializer

    @swagger_auto_schema(responses={status.HTTP_200_OK: serializer_class})
    def get(self, request, *args, **kwargs):
        cards = db.get_all_cards()
        serializer = serializers.CardSerializer(cards, many=True)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={status.HTTP_201_CREATED: serializer_class})
    def post(self, request, *args, **kwargs):
        serializer = serializers.CardSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
            except Exception as e:
                return Response(
                    {"result": "failed", "message": str(e)},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        return Response(serializer.data, status=status.HTTP_200_OK)


class CardDetailsApiView(APIView):
    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = serializers.CardSerializer

    @swagger_auto_schema(responses={status.HTTP_200_OK: serializer_class})
    def get(self, request, card_id, *args, **kwargs):
        card = db.get_single_card(card_id)
        serializer = serializers.CardSerializer(card, many=False)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={status.HTTP_200_OK: serializer_class})
    def put(self, request, card_id, *args, **kwargs):
        new_name = request.data["name"]
        card = db.update_card(card_id, new_name)
        serializer = serializers.CardSerializer(card, many=False)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={status.HTTP_204_NO_CONTENT: ""})
    def delete(self, request, card_id, *args, **kwargs):
        db.delete_card(card_id)
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryApiView(APIView):
    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = serializers.CategorySerializer

    @swagger_auto_schema(responses={status.HTTP_200_OK: serializer_class})
    def get(self, request, *args, **kwargs):
        categories = db.get_all_categories()
        serializer = serializers.CategorySerializer(categories, many=True)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={status.HTTP_201_CREATED: serializer_class})
    def post(self, request, *args, **kwargs):
        serializer = serializers.CategorySerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
            except Exception as e:
                return Response(
                    {"result": "failed", "message": str(e)},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoryDetailsApiView(APIView):
    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = serializers.CategorySerializer

    @swagger_auto_schema(responses={status.HTTP_200_OK: serializer_class})
    def get(self, request, category_id, *args, **kwargs):
        category = db.get_single_category(category_id)
        serializer = serializers.CategorySerializer(category, many=False)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={status.HTTP_200_OK: serializer_class})
    def put(self, request, category_id, *args, **kwargs):
        new_name = request.data["name"]
        category = db.update_category(category_id, new_name)
        serializer = serializers.CategorySerializer(category, many=False)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={status.HTTP_204_NO_CONTENT: ""})
    def delete(self, request, category_id, *args, **kwargs):
        db.delete_category(category_id)
        return Response(status=status.HTTP_204_NO_CONTENT)


class DesignerApiView(APIView):
    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = serializers.DesignerSerializer

    def get(self, request, *args, **kwargs):
        designers = db.get_all_designers()
        serializer = serializers.DesignerSerializer(designers, many=True)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        serializer = serializers.DesignerSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
            except Exception as e:
                return Response(
                    {"result": "failed", "message": str(e)},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        return Response(serializer.data, status=status.HTTP_200_OK)


class DesignerDetailsApiView(APIView):
    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = serializers.DesignerSerializer

    def get(self, request, designer_id, *args, **kwargs):
        designer = db.get_single_designer(designer_id)
        serializer = serializers.DesignerSerializer(designer, many=False)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, designer_id, *args, **kwargs):
        new_name = request.data["name"]
        designer = db.update_designer(designer_id, new_name)
        serializer = serializers.DesignerSerializer(designer, many=False)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, designer_id, *args, **kwargs):
        db.delete_designer(designer_id)
        return Response(status=status.HTTP_204_NO_CONTENT)
