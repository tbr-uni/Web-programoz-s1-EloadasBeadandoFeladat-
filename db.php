<?php
// Adatbázis csatlakozási adatok a Nethely-hez
$host = "localhost"; 

$db   = "nemesestoth"; 

$user = "nemesestoth"; 

$pass = "3Webprog3"; 

try {
    // PDO kapcsolat létrehozása az órai beállításokkal
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=UTF8", $user, $pass, [
        // Hibakezelés bekapcsolása (Exception dobása hiba esetén)
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        // Alapértelmezett lekérdezési mód: asszociatív tömb
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    // Ha a kapcsolódás sikertelen, leállítjuk a futást
    die("Database connection failed: " . $e->getMessage());
}
?>