

Post creation
-------------

If the License you have created is session-based, a SQL script also gets created in the same folder as that of the license file. This SQL script seeds the database before the VoltMX Application Server is started. For a time-based License, the output from the License Generation Tool will be as shown below:

The following is a sample time-based License file generated from the License Generation Tool:

```
#THIS IS AN AUTO-GENERATED FILE.  
#DO NOT MODIFY CONTENTS UNDER ANY CIRCUMSTANCE  
#client.name=TestClient  
client.name=V6tb5pG7Yz/mNGjwNG1mOBjwHMQFJFoM38pAqfBo3DYOYfG2kc7VT3  
aRdBqtmCXn/GVhdhdDRGLH5TX9V8lbSTN6MFpr9qix40rnQrPWnlUiocOO+mhE3SOQ  
IaRyHnzcbyHVE3mnHdAMjllBtM57cGnqMYkOIovgG1z9qtOv8D4=  
#app.id=testID  
app.id=NsBtRH5uvpgxv5XCJTL4pPthdeOEgrUL4JYUUQBschZHs6GuTcKJHOT6Gx/  
2AQ8ZAwrbwxdrTkf36T/dV2xKAyhIz/GqdACw7b6T5JHT2Dc4t9QOXNqUWYpRAj/P  
axj9ijRl52mHbbpTteE0+JIoZaaNRbD9vOMKV65/uC9YDLU=  
#start.date=23/09/2010  
#expiry.date=23/09/2020  
expiry.date=Uv9qvHhJYP8nfjwo+8eChjyJphRvO7VZ572uYbZ26ULxAnKAxBKYa9  
H77imeETN4igFj6QIyDAdotytl6V6gzoG3wVi45LzdM1pws3KPKYR/PB4v6qUZRBh  
VTUcNBRNBhYxBH5qMt8JGHwt6iq7jEIcqorItm33jKFTZVOVHDjA=  
adte=Uv9qvHhJYP8nfjwo+8eChjyJphRvO7VZ572uYbZ26ULxAnKAxBKYa9H77imeE  
TN4igFj6QIyDAdotytl6V6gzoG3wVi45LzdM1pws3KPKYR/PB4v6qUZRBhVTUcNBRN  
BhYxBH5qMt8JGHwt6iq7jEIcqorItm33jKFTZVOVHDjA=  
#warning.period=30  
warning.period=Dzt1YTalzy1BuqZA4c6W+F3m6U7X2XeB/JRkDy3I+So73icRiB  
UmS0zn1tymCA3rFbWeMi/I0D84A+Z/FxuNJKxRZ1HornARTVceeVvkFtUcERSxjBr  
XmGrahNE3AHJnBf/xznBt41nlyveWPyMxi4ug/L3JVKm1FbxeFOUHUwA=  
#max.session.count=100000  
max.session.count=c1bWxJpo5BDDMgqPL8QJi0KyvDQ6w3JLpDwEj29rCIpjCJm  
CUOvPZrErXzx1L4T8VcCJUIBsq9IrcWCvMtYN+lNr/DnTqygtNA3GS/eV8ck/o0a5  
8a+9EgVm9MGbuTin9wQok4FLexUBKC6DGGG3yefu9F3TMnRaP3NJAGdy+YM=  
#session.update.count=10  
session.update.count=c1bWxJpo5BDDMgqPL8QJi0KyvDQ6w3JLpDwEj29rCIpjC  
JmCUOvPZrErXzx1L4T8VcCJUIBsq9IrcWCvMtYN+lNr/DnTqygtNA3GS/eV8ck/o0a  
58a+9EgVm9MGbuTin9wQok4FLexUBKC6DGGG3yefu9F3TMnRaP3NJAGdy+YM=  
#url=  
url=s4I43MaXmdniZVmq1tU+MHfULmtjUCsCrtKbR2olsK4Zk77IPcr6B1Fe4REguPi  
BcXxJixYrvHFH/t4+eWtKJGlHfDb4w9p282J6qFjuGk3MuykOz0RvFNQtXBbFkH/zT0  
Vn2y3UMPwTcNoC7HOVWbjIWUTPStSFeiV9e3pkYaA=  
#license.type=NewLicense  
license.type=Ce60AwH+abipB1QaPPx06W0V23WCJKBeIOEezQ/GywP2lrDQTMlzOJ  
18Ly6xX4nv1Q6ESZzpcDrLew+mlOVcgRHip6DlQz/TTL74ZyrSNNbm694rbIJc3ZpDS  
TzEMAy/u8SAWm35ziKphlJfRiSCRfguzL80kLIdiNlqmt9PMTE=  
#dependant.value=AppID  
dependant.value=iuyVdvOLQUOTHOFxAYa+Qso8trRxHV11h4LbwDbF57hB3/QTItv  
tYDGC5z7jCHXSIvncRpOOKsrstt5EX8D2pfAZ4Hvk8O+Wz9HPUjrPiEJ+TWYcqh/Ruv  
GbFIxkNKrsDH2azFM7oPjsjzDiigPLfREx15DtXr79X3MA1wHlOFQ=  
#license.expiry.time=23/09/2010  
license.expiry.time=qoTp/ABdYEuN+PmsMEro48ANTVyiQOzeVUf6vBte38m5X  
4uNOulUHlko8+pfLTCxmZTZqy7o4OdclwvrLC+2JUCIPvKdgPyexssrwWnQR7  
JO3CAPms8LAE7sWOKX6xoN9qlbK3BiNAV0SkVNvgSA+KAjf+7aLew7ZrMeiXpBQc=
```

The license.expiry.time in the above file indicates the date by which you have to use the License. Beyond this date, you cannot use the License to access VoltMX Studio.

For example, if the start date is 01-01-2010, expiry date is 01-01-2020, and license expiry time is 15-01-2010, then though the expiry date is 01-01-2020, you cannot use the License beyond 15-01-2010.
