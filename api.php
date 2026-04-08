<?php
header("Content-Type: application/json");
require "db.php"; 

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
       
        if (isset($_GET['t']) && $_GET['t'] === 'pizza') {
            $stmt = $pdo->query("SELECT * FROM pizza ORDER BY nev ASC");
            echo json_encode([
                "status" => "Pizzák listája betöltve az OOJS-hez!", 
                "readData" => $stmt->fetchAll()
            ]);
        } 
       
        else if (isset($_GET['task']) && $_GET['task'] === 'pizzas') {
            $stmt = $pdo->query("SELECT nev FROM pizza ORDER BY nev ASC");
            echo json_encode(["pizzas" => $stmt->fetchAll()]);
        } 
       
        else {
            $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
            $limit = 50; 
            
            $stmt = $pdo->prepare("SELECT * FROM rendeles ORDER BY az DESC LIMIT :limit OFFSET :offset");
            $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
            $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
            $stmt->execute();
            
            echo json_encode([
                "status" => "Sikeres lekérés!", 
                "readData" => $stmt->fetchAll()
            ]);
        }
        break;

    case 'POST':
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $pdo->prepare("INSERT INTO rendeles (pizzanev, darab, felvetel, kiszallitas) VALUES (?, ?, ?, ?)");
            $stmt->execute([$data['pizzanev'], $data['darab'], $data['felvetel'], $data['kiszallitas']]);
            echo json_encode(["status" => "Rendelés sikeresen rögzítve!"]);
        } catch(Exception $e) {
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;

    case 'PUT':
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $pdo->prepare("UPDATE rendeles SET pizzanev=?, darab=?, felvetel=?, kiszallitas=? WHERE az=?");
            $stmt->execute([$data['pizzanev'], $data['darab'], $data['felvetel'], $data['kiszallitas'], $data['az']]);
            echo json_encode(["status" => "Rendelés sikeresen módosítva!"]);
        } catch(Exception $e) {
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;

    case 'DELETE':
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $pdo->prepare("DELETE FROM rendeles WHERE az=?");
            $stmt->execute([$data['az']]);
            echo json_encode(["status" => "Rendelés törölve!"]);
        } catch(Exception $e) {
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;
}
?>