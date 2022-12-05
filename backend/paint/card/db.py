from django.http import Http404
from .models import Card, Category, Designer
from django.http import Http404


def get_all_cards() -> Card:
    try:
        return Card.objects.all()
    except Card.DoesNotExist:
        raise Http404


def get_single_card(card_name: str) -> Card:
    try:
        return Card.objects.get(name=card_name)
    except Card.DoesNotExist:
        raise Http404


def update_card(card_name: str, new_name: str) -> Card:
    try:
        card = Card.objects.get(name=card_name)
        card.name = new_name
        card.save()
    except Exception as e:
        return
    return card


def delete_card(card_name: str):
    card = Card.objects.get(name=card_name)
    card.delete()
    return


def get_all_categories() -> Category:
    try:
        return Category.objects.all()
    except Category.DoesNotExist:
        raise Http404


def get_single_category(category_name: str) -> Category:
    try:
        return Category.objects.get(name=category_name)
    except Category.DoesNotExist:
        raise Http404


def update_category(category_name: str, new_name: str) -> Category:
    try:
        category = Category.objects.get(name=category_name)
        category.name = new_name
        category.save()
    except Exception as e:
        return
    return category


def delete_category(category_name: str):
    category = Category.objects.get(name=category_name)
    category.delete()
    return


def get_all_designers() -> Designer:
    try:
        return Designer.objects.all()
    except Designer.DoesNotExist:
        raise Http404


def get_single_designer(designer_name: str) -> Designer:
    try:
        return Designer.objects.get(name=designer_name)
    except Designer.DoesNotExist:
        raise Http404


def update_designer(designer_name: str, new_name: str) -> Designer:
    try:
        designer = Designer.objects.get(name=designer_name)
        designer.name = new_name
        designer.save()
    except Exception as e:
        return
    return designer


def delete_designer(designer_name: str):
    designer = Designer.objects.get(name=designer_name)
    designer.delete()
    return
