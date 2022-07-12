<?php

$server = "localhost";
$user = "root";
$pass = "";
$database = "selenium";

$link = mysqli_connect($server, $user, $pass, $database);

if(!$link){
  echo "error en la conexion con la base de datos";
}else{
  echo "conexion con la base de datos exitosa";
}



if(isset($_POST['registrar'])){
  $nombre =($_POST["nombre"]);
  $apellido =$_POST["apellido"];
  $fecha =$_POST["fecha"];
  $genero =($_POST["genero"]);
  $cedula =$_POST["cedula"];
  $telefono =$_POST["telefono"];
  $ocupacion =$_POST["ocupacion"];
}

$insertarDatos = "INSERT INTO usuarios VALUES('$nombre',
                                                '$apellido',
                                                '$genero',
                                                '$cedula',
                                                '$fecha',
                                                '$telefono',
                                                '$ocupacion')";

$ejecutarInsert = mysqli_query($link,$insertarDatos);


 header('Location:index.html');
?>
