#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
//#include <Adafruit_MLX90614.h>

char auth[] = "Hnnrew1SVZc8r-LiGa5e8uJdBzMhBDyQ";
char ssid[] = "mj";
char pass[] = "12345678";
//Adafruit_MLX90614 mlx = Adafruit_MLX90614();

void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN,OUTPUT);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Blynk.begin(auth, ssid, pass, "sgp1.blynk.cloud", 8080);
//  while (!Serial);
//
//  Serial.println("Adafruit MLX90614 test");
//
//  if (!mlx.begin()) {
//    Serial.println("Error connecting to MLX sensor. Check wiring.");
//    while (1);
//  };
//
//  Serial.print("Emissivity = "); Serial.println(mlx.readEmissivity());
//  Serial.println("================================================");
}

void loop() {
  Blynk.run();
//  Serial.print("Ambient = "); Serial.print(mlx.readAmbientTempC());
//  Serial.print("*C\tObject = "); Serial.print(mlx.readObjectTempC()); Serial.println("*C");
//  Blynk.virtualWrite(V1, mlx.readAmbientTempC()); // Menyimpan suhu di widget V1
//  Blynk.virtualWrite(V2, mlx.readObjectTempC());    // Menyimpan kelembaban di widget V2
}
BLYNK_WRITE(V9) {
 int pinValue = param.asInt();
    digitalWrite(LED_BUILTIN, pinValue); 
}
