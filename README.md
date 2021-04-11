# Blazor QRcode
A qrcode reader and qrcode maker for Blazor WebAssembly. Based on Html5Qrcode and qrcode.

# Install
Install this package in client_side project packages with:
```
Install-Package Blazor.QRCode -Version x.x
``` 
x.x is version of package for use last version see https://www.nuget.org/packages/Blazor.QRCode

# How to use
add js files in client_side _Host.cshml or index.html

Befor closed body tag:
```
<script src="_content/Blazor.QRCode/html5-qrcode.min.js"></script>
<script src="_content/Blazor.QRCode/qrcode.minErrorCallBack.js"></script>
<script src="_content/Blazor.QRCode/qrcode-init.js"></script>
```

then use this for create qrcode:
```
<QrCode
    ElementId="id"
    Width="150"
    height="150"
    Text="sampleText">
</QrCode>
```

and use this for read qrcode:
```
<QrCodeReader OnDetect="@DetectCallBack" OnError="@ErrorCallBack" />

@code
{

    public string text { get; set; } = "";

    public void DetectCallBack(string detectedString)
    {
    }

    public void ErrorCallBack(string errormesg)
    {
    }
}

```
