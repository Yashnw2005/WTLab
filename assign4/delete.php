<?php
require 'config.php';
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if ($id <= 0) { header('Location: index.php'); exit; }

$stmt = $mysqli->prepare("DELETE FROM students WHERE id = ?");
$stmt->bind_param('i', $id);
if ($stmt->execute()) {
    header('Location: index.php?msg=' . urlencode('Student deleted'));
    exit;
} else {
    header('Location: index.php?error=' . urlencode($stmt->error));
    exit;
}
