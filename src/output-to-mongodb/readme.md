# 将 fluentd 输出的日志写入 mongodb

## 前置

安装`fluent-plugin-mongo`

```bash
fluent-gem install fluent-plugin-mongo
```

## 说明

1.  启动`mongodb` server

2.  启动`fluentd`

3.  `node ./index.js`，发送日志到`fluentd`

4.  `fluentd`过`flush_interval`时间会将`Buffer`中的日志写入`mongodb`

## 参考链接

https://github.com/fluent/fluent-plugin-mongo

https://docs.fluentd.org/v1.0/articles/out_mongo
