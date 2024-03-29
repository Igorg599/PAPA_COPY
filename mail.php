<?
require_once 'PHPMailer/class.phpmailer.php';
require_once 'PHPMailer/PHPMailerAutoload.php';
require_once 'PHPMailer/class.smtp.php';


$admin_email = array();
foreach ( $_POST["admin_email"] as $key => $value ) {
	array_push($admin_email, $value);
}

$form_subject = "НОВЫЙ ЗАКАЗ";

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
// $mail->isSMTP();
// $mail->SMTPAuth = true;
// $mail->SMTPDebug = 0;

// $mail->Host = 'ssl://smtp.gmail.com';
// $mail->Port = 465;
// $mail->Username = 'Логин';
// $mail->Password = 'Пароль';

$jsonText = $_POST['Товары'];
$myArray = json_decode($jsonText, true);

$prod = '';

foreach ($myArray as $key => $value) {
	    $title = $value["name"];
		$price = $value["price"];
		$size = $value["size"];
		$type = $value["type"];
		$pizza = implode('', $value["pizza"]);
		$sauce = implode('', $value["sauce"]);
		$drink = implode('', $value["drink"]);
		$dopsName = implode('', $value["dopsName"]);
	    $prod .= "
			<tr>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$title</td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$type$size$dopsName$pizza$drink$sauce</td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$price</td>
			</tr>
			";
	}

$c = true;
$message = '';
foreach ( $_POST as $key => $value ) {
	if ( $value != ""  && $key != "admin_email" && $key != "form_subject"  && $key != "Товары") {
		if (is_array($value)) {
			$val_text = '';
			foreach ($value as $val) {
				if ($val && $val != '') {
					$val_text .= ($val_text==''?'':', ').$val;
				}
			}
			$value = $val_text;
		}
		$message .= "
		" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
		<td style='padding: 10px; width: auto;'><b>$key:</b></td>
		<td style='padding: 10px;width: 100%;'>$value</td>
		</tr>
		";
	}
}
$message = "<table style='width: 100%;'>$message . $prod</table>";


// От кого
$mail->setFrom('adm@' . $_SERVER['https://test2.союз-пермь.рф'], 'Your best site');

// Кому
foreach ( $admin_email as $key => $value ) {
	$mail->addAddress($value);
}
// Тема письма
$mail->Subject = $form_subject;

// Тело письма
$body = $message;
// $mail->isHTML(true);  это если прям верстка
$mail->msgHTML($body);


// Приложения
if ($_FILES){
	foreach ( $_FILES['file']['tmp_name'] as $key => $value ) {
		$mail->addAttachment($value, $_FILES['file']['name'][$key]);
	}
}
$mail->send();
?>