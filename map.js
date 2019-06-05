
<!DOCTYPE html>
<html>
<body>
<p>Click the button to get the square root of each element in the array.</p>
<script>
var numbers = [4, 9, 16, 25];
function myFunction() 
{
  x = document.getElementById("demo")
  x.innerHTML = numbers.map(Math.sqrt);
}
</script>
</body>
</html>
