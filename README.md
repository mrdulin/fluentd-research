# fluentd-research

## 使用说明

启动`fluentd`:

```bash
☁  fluentd-research [master] ⚡  fluentd -c ./fluent/fluent.conf -vv
```

停止`fluentd`:

```bash
☁  fluentd-research [master] ⚡  sudo pkill -f fluentd
```

检查配置文件是否正确:

- 配置文件包含错误

```bash
☁  fluentd-research [master] ⚡  fluentd --dry-run -c ./fluent/fluent.conf
2018-06-11 13:59:26 +0800 [info]: parsing config file is succeeded path="./fluent/fluent.conf"
2018-06-11 13:59:26 +0800 [info]: starting fluentd-1.2.1 as dry run mode ruby="2.3.3"
2018-06-11 13:59:26 +0800 [info]: adding forwarding server '192.168.0.12:24224' host="192.168.0.12" port=24224 weight=60 plugin_id="object:3fec6f00607c"
2018-06-11 13:59:26 +0800 [info]: [forward_output] adding forwarding server '192.168.0.11:24224' host="192.168.0.11" port=24224 weight=60 plugin_id="forward_output"
2018-06-11 13:59:26 +0800 [info]: [http_input] Oj is not installed, and failing back to Yajl for json parser
2018-06-11 13:59:26 +0800 [error]: config error file="./fluent/fluent.conf" error_class=Fluent::ConfigError error="Duplicated plugin id `forward_input`. Check whole configuration and fix it."
```

- 配置文件正确

```bash
☁  fluentd-research [master] ⚡  fluentd --dry-run -c ./fluent/fluent.conf
2018-06-11 14:00:05 +0800 [info]: parsing config file is succeeded path="./fluent/fluent.conf"
2018-06-11 14:00:05 +0800 [info]: starting fluentd-1.2.1 as dry run mode ruby="2.3.3"
2018-06-11 14:00:05 +0800 [info]: adding forwarding server '192.168.0.12:24224' host="192.168.0.12" port=24224 weight=60 plugin_id="object:3fd50301adac"
2018-06-11 14:00:05 +0800 [info]: [forward_output] adding forwarding server '192.168.0.11:24224' host="192.168.0.11" port=24224 weight=60 plugin_id="forward_output"
2018-06-11 14:00:05 +0800 [info]: [http_input] Oj is not installed, and failing back to Yajl for json parser
```

## 参考链接

https://docs.fluentd.org/v1.0/articles/quickstart
