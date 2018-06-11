# record_transformer Filter Plugin

## 说明

输入:

```json
{ "message": "this is a log" }
```

经过`filter_record_transformer`插件后，输出：

```bash
2018-06-11 16:56:43.000000000 +0800 filter.test.message: {"message":"this is a log","hostname":"US-C02WG0GXHV2V","tag":"filter.test.message"}
```

## 参考链接

https://docs.fluentd.org/v1.0/articles/filter_record_transformer
