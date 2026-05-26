from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)

class DataSource(models.Model):
    SOURCE_TYPES = [
        ("SAP", "SAP"),
        ("UTILITY", "UTILITY"),
        ("TRAVEL", "TRAVEL"),
    ]

    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    source_type = models.CharField(max_length=20, choices=SOURCE_TYPES)
    uploaded_at = models.DateTimeField(auto_now_add=True)

class EmissionRecord(models.Model):
    SCOPE_CHOICES = [
        ("SCOPE1", "Scope 1"),
        ("SCOPE2", "Scope 2"),
        ("SCOPE3", "Scope 3"),
    ]

    source = models.ForeignKey(DataSource, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=255)
    quantity = models.FloatField()
    unit = models.CharField(max_length=50)
    normalized_unit = models.CharField(max_length=50)
    scope = models.CharField(max_length=20, choices=SCOPE_CHOICES)
    status = models.CharField(max_length=20, default="PENDING")
    raw_data = models.JSONField()
