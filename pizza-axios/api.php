<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include "db.php";

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        $stmt = $pdo->query("SELECT * FROM rendeles");
        echo json_encode(["readData" => $stmt->fetchAll(PDO::FETCH_ASSOC), "status" => "OK"]);
        break;
    case 'POST':
        $sql = "INSERT INTO rendeles (pizzanev, darab, felvetel, kiszallitas) VALUES (?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$input['pizzanev'], $input['darab'], $input['felvetel'], $input['kiszallitas']]);
        echo json_encode(["status" => "Rögzítve"]);
        break;
    case 'PUT':
        $sql = "UPDATE rendeles SET pizzanev=?, darab=?, felvetel=?, kiszallitas=? WHERE az=?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$input['pizzanev'], $input['darab'], $input['felvetel'], $input['kiszallitas'], $input['az']]);
        echo json_encode(["status" => "Frissítve"]);
        break;
    case 'DELETE':
        $stmt = $pdo->prepare("DELETE FROM rendeles WHERE az=?");
        $stmt->execute([$input['az']]);
        echo json_encode(["status" => "Törölve"]);
        break;
}
?>