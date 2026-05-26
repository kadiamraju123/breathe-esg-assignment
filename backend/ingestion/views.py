import pandas as pd

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import (
    Company,
    DataSource,
    EmissionRecord
)

from .serializers import RecordSerializer


@api_view(["GET"])
def get_records(request):

    records = EmissionRecord.objects.all()

    serializer = RecordSerializer(
        records,
        many=True
    )

    return Response(serializer.data)


@api_view(["POST"])
def upload_csv(request):

    file = request.FILES["file"]

    df = pd.read_csv(file)

    company, _ = Company.objects.get_or_create(
        name="Demo Company"
    )

    source = DataSource.objects.create(
        company=company,
        source_type=request.data.get("source_type")
    )

    for _, row in df.iterrows():

        EmissionRecord.objects.create(
            source=source,
            activity_type=row.get(
                "activity_type",
                "Unknown"
            ),
            quantity=row.get(
                "quantity",
                0
            ),
            unit=row.get(
                "unit",
                ""
            ),
            normalized_unit="kg",
            scope=row.get(
                "scope",
                "Scope 1"
            ),
            raw_data=row.to_dict()
        )

    return Response({
        "message": "CSV uploaded successfully"
    })
@api_view(["PATCH"])
def update_status(request, pk):

    record = EmissionRecord.objects.get(id=pk)

    record.status = request.data.get("status")

    record.save()

    return Response({
        "message": "Status updated"
    })