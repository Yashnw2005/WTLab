<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Add Student</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
  <h1>Add Student</h1>
  <a class="button" href="index.php">Back to List</a>
</header>

<?php if(isset($_GET['error'])): ?>
  <div class="msg error"><?= htmlspecialchars($_GET['error']) ?></div>
<?php endif; ?>

<form action="store.php" method="post">
  <div class="form-row">
    <label for="name">Name *</label>
    <input id="name" name="name" type="text" required>
  </div>
  <div class="form-row">
    <label for="email">Email *</label>
    <input id="email" name="email" type="email" required>
  </div>
  <div class="form-row">
    <label for="age">Age</label>
    <input id="age" name="age" type="number" min="0">
  </div>
  <div class="form-row">
    <label for="course">Course</label>
    <input id="course" name="course" type="text">
  </div>
  <input type="submit" value="Save">
</form>
</body>
</html>
