<?php
/**
 * @file
 * @Created: 31/03/2018 4:47 PM
 */

class MohaWeChat {
  public static $errCode = array(
    '0' => '处理成功',
    '40001' => '校验签名失败',
    '40002' => '解析xml失败',
    '40003' => '计算签名失败',
    '40004' => '不合法的AESKey',
    '40005' => '校验AppID失败',
    '40006' => 'AES加密失败',
    '40007' => 'AES解密失败',
    '40008' => '公众平台发送的xml不合法',
    '40009' => 'Base64编码失败',
    '40010' => 'Base64解码失败',
    '40011' => '公众帐号生成回包xml失败',
    '' => '',
  );

  public static $accessTokenError = array(
    '-1' => '系统繁忙，此时请开发者稍候再试',
    '0' => '处理成功',
    '40001' => 'AppSecret错误或者AppSecret不属于这个公众号，请开发者确认AppSecret的正确性',
    '40002' => '请确保grant_type字段值为client_credential',
    '40164' => '调用接口的IP地址不在白名单中，请在接口IP白名单中进行设置',
    '' => '',
  );

}