initSidebarItems({"mod":[["buffer","Memory buffer API"],["mpmc","Multiple-producer multiple-consumer queue"],["mpsc","Multiple-producer single-consumer queue"],["spmc","Single-producer multiple-consumer queue"],["spsc","Single-producer single-consumer queue"]],"trait":[["Consumer","The consumer end of the queue allows for receiving data. `Consumer<T>` is always `Send`, but is only `Sync` for multi-consumer (SPMC, MPMC) queues."],["Producer","The consumer end of the queue allows for sending data. `Producer<T>` is always `Send`, but is only `Sync` for multi-producer (MPSC, MPMC) queues."]]});