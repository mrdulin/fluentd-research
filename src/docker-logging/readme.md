# 使用`fluentd`记录`docker`容器中的日志

## 用法

启动`fluentd`:

```bash
docker run -d -p 24224:24224 -p 24224:24224/udp -v /Users/ldu020/workspace/fluentd-research/logs:/fluentd/log -v /Users/ldu020/workspace/fluentd-research/src/docker-logging:/fluentd/etc fluent/fluentd
```

基于`ubuntu`镜像，运行一个容器，指定`fluentd`作为容器的日志驱动

```bash
docker run --log-driver=fluentd --log-opt tag=docker.my_new_tag ubuntu echo "Hello Fluentd"
```

## 参考链接

https://docs.docker.com/config/containers/logging/configure/#supported-logging-drivers

https://www.fluentd.org/guides/recipes/docker-logging

https://docs.docker.com/config/containers/logging/fluentd/
