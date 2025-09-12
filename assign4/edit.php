<?php
require 'config.php';
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if ($id <= 0) { header('Location: index.php'); exit; }

$stmt = $mysqli->prepare("SELECT * FROM students WHERE id = ?");
$stmt->bind_param('i', $id);
$stmt->execute();
$res = $stmt->get_result();
$student = $res->fetch_assoc();
if (!$student) { header('Location: index.php'); exit; }
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Edit Student</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
  <h1>Edit Student</h1>
  <a class="button" href="index.php">Back to List</a>
</header>

<form action="update.php" method="post">
  <input type="hidden" name="id" value="<?= htmlspecialchars($student['id']) ?>">
  <div class="form-row">
    <label>Name *</label>
    <input name="name" type="text" required value="<?= htmlspecialchars($student['name']) ?>">
  </div>
  <div class="form-row">
    <label>Email *</label>
    <input name="email" type="email" required value="<?= htmlspecialchars($student['email']) ?>">
  </div>
  <div class="form-row">
    <label>Age</label>
    <input name="age" type="number" min="0" value="<?= htmlspecialchars($student['age']) ?>">
  </div>
  <div class="form-row">
    <label>Course</label>
    <input name="course" type="text" value="<?= htmlspecialchars($student['course']) ?>">
  </div>
  <input type="submit" value="Update">
</form>
</body>
</html>
