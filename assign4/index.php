<?php
require 'config.php';
$msg = isset($_GET['msg']) ? htmlspecialchars($_GET['msg']) : '';
$error = isset($_GET['error']) ? htmlspecialchars($_GET['error']) : '';

$result = $mysqli->query("SELECT * FROM students ORDER BY id DESC");
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Student CRUD</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
  <h1>Students</h1>
  <a class="button" href="create.php">Add Student</a>
</header>

<?php if($msg): ?>
  <div class="msg"><?= $msg ?></div>
<?php endif; ?>
<?php if($error): ?>
  <div class="msg error"><?= $error ?></div>
<?php endif; ?>

<table>
  <thead>
    <tr><th>ID</th><th>Name</th><th>Email</th><th>Age</th><th>Course</th><th>Created</th><th>Actions</th></tr>
  </thead>
  <tbody>
  <?php while($row = $result->fetch_assoc()): ?>
    <tr>
      <td><?= htmlspecialchars($row['id']) ?></td>
      <td><?= htmlspecialchars($row['name']) ?></td>
      <td><?= htmlspecialchars($row['email']) ?></td>
      <td><?= htmlspecialchars($row['age']) ?></td>
      <td><?= htmlspecialchars($row['course']) ?></td>
      <td><?= htmlspecialchars($row['created_at']) ?></td>
      <td>
        <a class="small" href="edit.php?id=<?= $row['id'] ?>">Edit</a>
        <a class="delete" href="delete.php?id=<?= $row['id'] ?>" onclick="return confirm('Delete this student?')">Delete</a>
      </td>
    </tr>
  <?php endwhile; ?>
  </tbody>
</table>
</body>
</html>
