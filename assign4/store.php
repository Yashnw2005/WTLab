<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php'); exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$age = isset($_POST['age']) && $_POST['age'] !== '' ? intval($_POST['age']) : null;
$course = trim($_POST['course'] ?? '');

$errors = [];
if ($name === '') $errors[] = "Name is required";
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Valid email is required";

if (!empty($errors)) {
    header('Location: create.php?error=' . urlencode(implode(' | ', $errors)));
    exit;
}

$stmt = $mysqli->prepare("INSERT INTO students (name, email, age, course) VALUES (?, ?, ?, ?)");
if ($stmt === false) {
    header('Location: create.php?error=' . urlencode($mysqli->error));
    exit;
}

// bind_param needs variables; if age is null, pass NULL and adjust type to 's' for simple demo
// We'll treat age as integer when provided, else pass NULL as string (DB allows NULL)
$age_param = $age === null ? null : $age;
$stmt->bind_param('ssis', $name, $email, $age_param, $course);

if ($stmt->execute()) {
    header('Location: index.php?msg=' . urlencode('Student added'));
    exit;
} else {
    header('Location: create.php?error=' . urlencode($stmt->error));
    exit;
}
