<?php
require 'config.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: index.php'); exit; }

$id = isset($_POST['id']) ? intval($_POST['id']) : 0;
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$age = isset($_POST['age']) && $_POST['age'] !== '' ? intval($_POST['age']) : null;
$course = trim($_POST['course'] ?? '');

$errors = [];
if ($id <= 0) $errors[] = "Invalid ID";
if ($name === '') $errors[] = "Name is required";
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Valid email is required";

if (!empty($errors)) {
    header('Location: edit.php?id=' . $id . '&error=' . urlencode(implode(' | ', $errors)));
    exit;
}

$stmt = $mysqli->prepare("UPDATE students SET name = ?, email = ?, age = ?, course = ? WHERE id = ?");
if ($stmt === false) {
    header('Location: edit.php?id=' . $id . '&error=' . urlencode($mysqli->error));
    exit;
}

$age_param = $age === null ? null : $age;
$stmt->bind_param('ssisi', $name, $email, $age_param, $course, $id);
if ($stmt->execute()) {
    header('Location: index.php?msg=' . urlencode('Student updated'));
    exit;
} else {
    header('Location: edit.php?id=' . $id . '&error=' . urlencode($stmt->error));
    exit;
}
