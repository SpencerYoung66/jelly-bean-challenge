from rest_framework import serializers
from .models import Flavor

class FlavorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Flavor
        fields = ['name', 'id']