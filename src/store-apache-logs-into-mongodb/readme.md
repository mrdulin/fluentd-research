# 将 apache 日志写入 mongodb

## 环境

`Mac OSX`

## apache 简要说明

启动`apache` http server

```bash
☁  ~  apachectl -k start
AH00557: httpd: apr_sockaddr_info_get() failed for US-C02WG0GXHV2V
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
(13)Permission denied: AH00072: make_sock: could not bind to address [::]:80
(13)Permission denied: AH00072: make_sock: could not bind to address 0.0.0.0:80
no listening sockets available, shutting down
AH00015: Unable to open logs
```

需要权限:

```bash
☁  ~  sudo apachectl -k start
AH00557: httpd: apr_sockaddr_info_get() failed for US-C02WG0GXHV2V
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
```

需要设置`ServerName`:

```txt
ServerName localhost:80
```

再次启动`apache` http server

```bash
☁  ~  sudo apachectl -k start
httpd (pid 78244) already running
```

验证是否启动成功:

```bash
☁  ~  curl localhost
<html><body><h1>It works!</h1></body></html>
```

重启:

```bash
☁  ~  sudo apachectl -k restart
```

停止:

```bash
☁  ~  sudo apachectl -k stop
☁  ~  curl localhost
curl: (7) Failed to connect to localhost port 80: Connection refused
```

检查配置文件语法是否正确:

```bash
☁  ~  apachectl -t
Syntax OK
```

##  用法

1.  启动`mongodb` server

2.  启动`fluentd`

3.  使用`ab -n 100 -c 10 http://localhost/`测试

4.  通过`mongo-shell`连接到`mongodb` server 查看日志文档

## 参考链接

https://docs.fluentd.org/v1.0/articles/apache-to-mongodb

Mac OSX 下`apache`各文件路径 - https://wiki.apache.org/httpd/DistrosDefaultLayout#Mac_OS_X_.28Leopard.2C_Apache_httpd_2.2.29:

https://httpd.apache.org/docs/2.4/getting-started.html

https://httpd.apache.org/docs/trunk/stopping.html
