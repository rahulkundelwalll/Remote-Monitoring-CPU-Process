import json
import psutil

def get_process_data():
    process_data = []
    for proc in psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_percent', 'num_threads', 'connections']):
        try:
            connections = proc.info['connections']
            # Extracting port numbers from connections
            port_numbers = [conn.laddr.port for conn in connections if conn.status == 'LISTEN']
        except psutil.AccessDenied:
            port_numbers = []
        process_data.append({
            'pid': proc.pid,
            'name': proc.info['name'],
            'cpu_percent': proc.info['cpu_percent'],
            'memory_percent': proc.info['memory_percent'],
            'num_threads': proc.info['num_threads'],
            'port_numbers': port_numbers
        })
    return process_data

if __name__ == "__main__":
    processes = get_process_data()
    json_output = json.dumps(processes, indent=4)
    with open('process_data.json', 'w') as f:
        f.write(json_output)
