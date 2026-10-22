from django.http import JsonResponse


def health_check(type_request):
    data = {
        "status" : 200,
        "items" : [
            "Configurar docker"
            "Automatizar CI"
            "Publicar no GHCR"
        ]

    }
    return JsonResponse(data)




