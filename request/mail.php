
<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach

$c = true;
if ($method === 'POST') {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);
	$form_url = trim($_POST["Товар"]);
	$form_subject = 'Заказ '.date('H:i:s / d.m.Y').'г.';
	$_SERVER["REQUEST_URI"];

	foreach ($_POST as $key => $value) {
		$_SERVER["REQUEST_URI"];
		if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
			$message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$form_url</td>
			</tr>
			";
		}
	}
} else if ($method === 'GET') {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ($_GET as $key => $value) {
		if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
			$message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$form_url</td>
			</tr>
			";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text)
{
	return '=?UTF-8?B?' . Base64_encode($text) . '?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
	"Content-Type: text/html; charset=utf-8" . PHP_EOL .
	'From: ' . adopt($project_name) . ' <' . $admin_email . '>' . PHP_EOL .
	'Reply-To: ' . $admin_email . '' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);
