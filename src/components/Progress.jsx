// react props 通过 函数参数传递
export default function Progress( { text, percentage }) {
    // 简化三元运算符 （阮一峰的es6） 看到了 
    percentage = percentage??0;
    return (
        <div className="progress-container">
            <div 
                className="progress-bar" 
                style={{'width': `${percentage}%`}}
            >
                {text} ({`${percentage.toFixed(2)}`}%)
            </div>
        </div>
    )
}